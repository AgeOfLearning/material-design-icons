import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter3Element
 * @class IconRoundFilter3Element
 * @extends {AoflElement}
 */
class IconRoundFilter3Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter3Element.is, IconRoundFilter3Element);

export default IconRoundFilter3Element;
