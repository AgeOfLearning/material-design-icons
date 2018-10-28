import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudCircleElement
 * @class IconTwotoneCloudCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudCircleElement.is, IconTwotoneCloudCircleElement);

export default IconTwotoneCloudCircleElement;
