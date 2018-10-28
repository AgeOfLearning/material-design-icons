import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalBarElement
 * @class IconTwotoneLocalBarElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalBarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalBarElement.is, IconTwotoneLocalBarElement);

export default IconTwotoneLocalBarElement;
