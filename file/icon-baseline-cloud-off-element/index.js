import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudOffElement
 * @class IconBaselineCloudOffElement
 * @extends {AoflElement}
 */
class IconBaselineCloudOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudOffElement.is, IconBaselineCloudOffElement);

export default IconBaselineCloudOffElement;
