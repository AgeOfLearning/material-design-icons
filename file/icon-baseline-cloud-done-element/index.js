import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudDoneElement
 * @class IconBaselineCloudDoneElement
 * @extends {AoflElement}
 */
class IconBaselineCloudDoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudDoneElement.is, IconBaselineCloudDoneElement);

export default IconBaselineCloudDoneElement;
