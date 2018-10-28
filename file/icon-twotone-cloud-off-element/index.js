import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudOffElement
 * @class IconTwotoneCloudOffElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudOffElement.is, IconTwotoneCloudOffElement);

export default IconTwotoneCloudOffElement;
