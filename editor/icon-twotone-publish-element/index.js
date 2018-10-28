import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePublishElement
 * @class IconTwotonePublishElement
 * @extends {AoflElement}
 */
class IconTwotonePublishElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePublishElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-publish';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePublishElement.is, IconTwotonePublishElement);

export default IconTwotonePublishElement;
