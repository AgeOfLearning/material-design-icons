import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudElement
 * @class IconBaselineCloudElement
 * @extends {AoflElement}
 */
class IconBaselineCloudElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudElement.is, IconBaselineCloudElement);

export default IconBaselineCloudElement;
