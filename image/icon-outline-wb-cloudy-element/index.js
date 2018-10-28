import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWbCloudyElement
 * @class IconOutlineWbCloudyElement
 * @extends {AoflElement}
 */
class IconOutlineWbCloudyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWbCloudyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wb-cloudy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWbCloudyElement.is, IconOutlineWbCloudyElement);

export default IconOutlineWbCloudyElement;
