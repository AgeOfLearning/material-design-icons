import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHighlightOffElement
 * @class IconTwotoneHighlightOffElement
 * @extends {AoflElement}
 */
class IconTwotoneHighlightOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHighlightOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-highlight-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHighlightOffElement.is, IconTwotoneHighlightOffElement);

export default IconTwotoneHighlightOffElement;
