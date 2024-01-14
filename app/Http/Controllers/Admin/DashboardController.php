<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $unpaid = Transaction::where('status', 'UNPAID')->count();
        $paid = Transaction::where('status', 'PAID')->count();
        $expired = Transaction::where('status', 'EXPIRED')->count();
        $cancelled = Transaction::where('status', 'CANCELLED')->count();

        $year = date('Y');
        $transactions = DB::table('transactions')
            ->addSelect(DB::raw('SUM(grand_total) as grand_total'))
            ->addSelect(DB::raw('MONTH(created_at) as month'))
            ->addSelect(DB::raw('MONTHNAME(created_at) as month_name'))
            ->addSelect(DB::raw('YEAR(created_at) as year'))
            ->whereYear('created_at', '=', $year)
            ->where('status', 'PAID')
            ->groupBy('month')
            ->orderByRaw('month ASC')
            ->get();
        $month_name = [];
        $grand_total = [];

        if (count($transactions) > 0) {
            foreach ($transactions as $transaction) {
                array_push($month_name, $transaction->month_name);
                array_push($grand_total, $transaction->grand_total);
            }
        }
        return Inertia::render('Admin/Dashboard/Index', [
            'count' => [
                'unpaid'    => $unpaid,
                'paid'      => $paid,
                'expired'   => $expired,
                'cancelled' => $cancelled
            ],
            'chart' => [
                'month_name'    => $month_name,
                'grand_total'   => $grand_total
            ]
        ]);
    }
}
