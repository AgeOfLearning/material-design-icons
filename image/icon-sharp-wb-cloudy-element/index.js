import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWbCloudyElement
 * @class IconSharpWbCloudyElement
 * @extends {AoflElement}
 */
class IconSharpWbCloudyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWbCloudyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wb-cloudy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWbCloudyElement.is, IconSharpWbCloudyElement);

export default IconSharpWbCloudyElement;
