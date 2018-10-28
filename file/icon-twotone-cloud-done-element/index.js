import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudDoneElement
 * @class IconTwotoneCloudDoneElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudDoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudDoneElement.is, IconTwotoneCloudDoneElement);

export default IconTwotoneCloudDoneElement;
