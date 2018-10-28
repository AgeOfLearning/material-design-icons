import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineQueryBuilderElement
 * @class IconOutlineQueryBuilderElement
 * @extends {AoflElement}
 */
class IconOutlineQueryBuilderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineQueryBuilderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-query-builder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineQueryBuilderElement.is, IconOutlineQueryBuilderElement);

export default IconOutlineQueryBuilderElement;
