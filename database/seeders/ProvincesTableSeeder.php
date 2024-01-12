<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Province;

class ProvincesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $req = Http::withHeaders([
            'key' => config('rajaongkir.api_key'),
            'Content-Type' => 'application/json'
        ])->get('https://api.rajaongkir.com/starter/province');

        foreach($req['rajaongkir']['results'] as $province) {
            Province::create([
                'id' => $province['province_id'],
                'name' => $province['province']
            ]);
        }
    }
}
