---
publishDate: 2026-09-14T00:00:00Z
author: Joseph Otieno Ouma
title: "Finding the unmapped customer: GIS and non-revenue water"
excerpt: Water utilities lose revenue where their customer records and the buildings on the ground disagree. A spatial gap analysis shows exactly where to send enumerators first.
image: ~/assets/images/agg/kiwasco-hotspot.jpg
imageAlt: Hotspot analysis of surveyed and unsurveyed areas in a utility service area
category: Utilities
tags:
  - water
  - gap analysis
  - ArcGIS Pro
---

Non-revenue water has two halves. Physical losses leak out of pipes. Commercial losses are water that is delivered and used but never billed, often because the connection or the customer is missing from the utility's records.

## The spatial question

A customer information system is a table. The city is a surface. Laying one over the other answers a simple question that a table cannot: where are there buildings, but no customers?

Building footprints from recent imagery or open datasets are compared with geocoded customer records, zone by zone. The output is a gap-density surface: the places where enumeration teams will find the most unregistered connections per day of fieldwork.

## Why hotspot statistics help

Raw counts mislead, because large zones always hold more buildings. Hotspot analysis (Getis-Ord Gi*) separates statistically significant clusters of unsurveyed buildings from background noise, so the field plan rests on evidence instead of impressions.

## What the utility gains

- A prioritised enumeration plan instead of a blanket census.
- A customer database tied to locations, which makes later network modelling possible.
- A web map that managers and the supervising consultant can check progress against.

The method is not specific to water. Any service with customers and a service area, from electricity to solid waste, has the same gap hiding in its records.
