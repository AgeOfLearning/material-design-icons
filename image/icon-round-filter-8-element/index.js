import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter8Element
 * @class IconRoundFilter8Element
 * @extends {AoflElement}
 */
class IconRoundFilter8Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter8Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-8';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter8Element.is, IconRoundFilter8Element);

export default IconRoundFilter8Element;
