import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStrikethroughSElement
 * @class IconTwotoneStrikethroughSElement
 * @extends {AoflElement}
 */
class IconTwotoneStrikethroughSElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStrikethroughSElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-strikethrough-s';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStrikethroughSElement.is, IconTwotoneStrikethroughSElement);

export default IconTwotoneStrikethroughSElement;
