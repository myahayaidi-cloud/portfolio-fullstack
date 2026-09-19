<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProjetFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titre' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'technologies' => fake()->randomElement(['React, Laravel', 'PHP, MySQL', 'JavaScript, Bootstrap']),
            'date_debut' => fake()->dateTimeBetween('-1 year', 'now'),
            'date_fin' => fake()->optional()->dateTimeBetween('now', '+6 months'),
        ];
    }
}
