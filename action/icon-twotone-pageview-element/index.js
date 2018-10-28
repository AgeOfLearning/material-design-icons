import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePageviewElement
 * @class IconTwotonePageviewElement
 * @extends {AoflElement}
 */
class IconTwotonePageviewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePageviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pageview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePageviewElement.is, IconTwotonePageviewElement);

export default IconTwotonePageviewElement;
