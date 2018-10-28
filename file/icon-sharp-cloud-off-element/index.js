import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudOffElement
 * @class IconSharpCloudOffElement
 * @extends {AoflElement}
 */
class IconSharpCloudOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudOffElement.is, IconSharpCloudOffElement);

export default IconSharpCloudOffElement;
