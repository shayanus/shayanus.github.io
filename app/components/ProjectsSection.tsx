'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					><div className="p-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">Machine Content Learning Sorter</h3>
        <p className="text-gray-400">
          Built an intelligent file sorting system that uses AWS SageMaker to classify files by content and metadata. Automated categorization into predefined folders using Python, boosting sorting accuracy by 40%. Leveraged AWS Glue for ETL, data cleaning, and transformation prior to model inference. Used Git for collaboration and continuous improvements.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold text-blue-400 mb-3">Pipeline Components</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Python-based Orchestration</li>
            <li>• SageMaker Model Inference</li>
            <li>• AWS Glue Data Transformation</li>
            <li>• S3-based File Routing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-3">Infrastructure Stack</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Lambda Event Triggers</li>
            <li>• CloudWatch Monitoring</li>
            <li>• Git Version Control</li>
            <li>• IAM Roles & Policies</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-teal-400">Impact Metrics</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• 40% Increase in Sorting Precision</li>
          <li>• 60% Reduction in Manual Work</li>
          <li>• Real-time Model Integration with Glue</li>
        </ul>
      </div>
    </div>

    <div className="bg-black/30 rounded-xl p-6">
      <h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
      <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* File Ingestion */}
          <g>
            <rect x="120" y="20" width="160" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
            <text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
              AWS S3 File Upload
            </text>
          </g>

          {/* ETL Process */}
          <g>
            <rect x="120" y="70" width="160" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
            <text x="200" y="95" textAnchor="middle" className="fill-gray-400 text-[12px]">
              AWS Glue (ETL & Cleansing)
            </text>
          </g>

          {/* ML Classification */}
          <g>
            <rect x="120" y="130" width="160" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
            <text x="200" y="155" textAnchor="middle" className="fill-gray-400 text-[12px]">
              SageMaker Model Inference
            </text>
          </g>

          {/* Sorting Engine */}
          <g>
            <rect x="120" y="190" width="160" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
            <text x="200" y="210" textAnchor="middle" className="fill-gray-400 text-[12px]">
              Python Sorting Logic
            </text>
          </g>

          {/* Output Storage */}
          <g>
            <rect x="120" y="240" width="160" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
            <text x="200" y="260" textAnchor="middle" className="fill-gray-400 text-[12px]">
              Sorted S3 Buckets
            </text>
          </g>

          {/* Arrows */}
          <g className="stroke-gray-600" strokeWidth="1">
            <line x1="200" y1="50" x2="200" y2="70" />
            <line x1="200" y1="110" x2="200" y2="130" />
            <line x1="200" y1="170" x2="200" y2="190" />
            <line x1="200" y1="220" x2="200" y2="240" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</div>

					</motion.div>

					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Real-Time Flight Data Streaming and Processing</h3>
										<p className="text-gray-400">
											Developed and deployed a real-time data streaming pipeline to process flight data by pushing data into AWS Kinesis Data Streams using an existing online API. Enabled seamless ingestion, transformation, and storage of flight schedules, status updates, and passenger information into Snowflake for analytics. 
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Real-time Analytics Dashboards</li>
												<li>• Delay & Load Visualizations</li>
												<li>• Regional Demand Reports</li>
												<li>• Data Export (CSV, PDF)</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AWS Kinesis + Lambda</li>
												<li>• DBT Transformations</li>
												<li>• Snowflake Warehouse</li>
												<li>• Kafka for Stream Orchestration</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 1M+ Events Processed/Minute</li>
											<li>• Near Real-time Updates (5s)</li>
											<li>• 100+ Tables with Version Control</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
        {/* Data Sources */}
        <g>
          <rect x="20" y="20" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
          <rect x="210" y="20" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
          <text x="105" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">API Events</text>
          <text x="295" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">Lambda Triggers</text>
        </g>

        {/* Event Processing */}
        <g>
          <rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
          <text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">Kafka Event Streaming</text>
        </g>

        {/* Processing Layer */}
        <g>
          <rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
          <rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
          <text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">Stream Processing (DBT)</text>
          <text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">Batch Enrichment</text>
        </g>

        {/* Storage Layer */}
        <g>
          <rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
          <rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
          <text x="105" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">Snowflake</text>
          <text x="295" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">ClickHouse</text>
        </g>

        {/* API Layer */}
        <g>
          <rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
          <text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">GraphQL + BI Layer</text>
        </g>

        {/* Connection Lines */}
        <g className="stroke-gray-600" strokeWidth="1">
          <line x1="105" y1="50" x2="105" y2="80" />
          <line x1="295" y1="50" x2="295" y2="80" />
          <line x1="200" y1="120" x2="200" y2="150" />
          <line x1="105" y1="190" x2="105" y2="220" />
          <line x1="295" y1="190" x2="295" y2="220" />
          <line x1="200" y1="250" x2="200" y2="270" />
        </g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
