import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudElement
 * @class IconTwotoneCloudElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudElement.is, IconTwotoneCloudElement);

export default IconTwotoneCloudElement;
