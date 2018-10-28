import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWbCloudyElement
 * @class IconBaselineWbCloudyElement
 * @extends {AoflElement}
 */
class IconBaselineWbCloudyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWbCloudyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wb-cloudy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWbCloudyElement.is, IconBaselineWbCloudyElement);

export default IconBaselineWbCloudyElement;
