import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudCircleElement
 * @class IconBaselineCloudCircleElement
 * @extends {AoflElement}
 */
class IconBaselineCloudCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudCircleElement.is, IconBaselineCloudCircleElement);

export default IconBaselineCloudCircleElement;
