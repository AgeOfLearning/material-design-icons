import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneThumbUpElement
 * @class IconTwotoneThumbUpElement
 * @extends {AoflElement}
 */
class IconTwotoneThumbUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneThumbUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-thumb-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneThumbUpElement.is, IconTwotoneThumbUpElement);

export default IconTwotoneThumbUpElement;
