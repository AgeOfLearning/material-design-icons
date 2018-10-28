import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineQueryBuilderElement
 * @class IconBaselineQueryBuilderElement
 * @extends {AoflElement}
 */
class IconBaselineQueryBuilderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineQueryBuilderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-query-builder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineQueryBuilderElement.is, IconBaselineQueryBuilderElement);

export default IconBaselineQueryBuilderElement;
