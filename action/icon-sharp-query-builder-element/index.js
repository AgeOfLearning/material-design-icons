import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpQueryBuilderElement
 * @class IconSharpQueryBuilderElement
 * @extends {AoflElement}
 */
class IconSharpQueryBuilderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpQueryBuilderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-query-builder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpQueryBuilderElement.is, IconSharpQueryBuilderElement);

export default IconSharpQueryBuilderElement;
