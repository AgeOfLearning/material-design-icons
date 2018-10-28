import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneQueryBuilderElement
 * @class IconTwotoneQueryBuilderElement
 * @extends {AoflElement}
 */
class IconTwotoneQueryBuilderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneQueryBuilderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-query-builder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneQueryBuilderElement.is, IconTwotoneQueryBuilderElement);

export default IconTwotoneQueryBuilderElement;
