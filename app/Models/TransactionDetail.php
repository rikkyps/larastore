<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_id',
        'product_id',
        'product_image',
        'color',
        'color_image',
        'size',
        'price',
        'qty',
    ];


    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    protected function productImage(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/products/' . $image),
        );
    }

    protected function colorImage(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/colors/' . $image),
        );
    }
}
