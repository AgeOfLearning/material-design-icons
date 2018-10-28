import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundQueryBuilderElement
 * @class IconRoundQueryBuilderElement
 * @extends {AoflElement}
 */
class IconRoundQueryBuilderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundQueryBuilderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-query-builder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundQueryBuilderElement.is, IconRoundQueryBuilderElement);

export default IconRoundQueryBuilderElement;
