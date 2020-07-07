import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { ScatterplotChartComponent } from "./scatterplot-chart/scatterplot-chart.component";
import { ModeOfStudyComponent } from './mode-of-study/mode-of-study.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "all-students", component: BarChartComponent },
  { path: "employed", component: LineChartComponent },
  { path: "mode-of-study", component: ModeOfStudyComponent },
  { path: "", component: ScatterplotChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
