import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWbCloudyElement
 * @class IconTwotoneWbCloudyElement
 * @extends {AoflElement}
 */
class IconTwotoneWbCloudyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWbCloudyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wb-cloudy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWbCloudyElement.is, IconTwotoneWbCloudyElement);

export default IconTwotoneWbCloudyElement;
