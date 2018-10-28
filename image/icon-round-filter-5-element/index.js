import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter5Element
 * @class IconRoundFilter5Element
 * @extends {AoflElement}
 */
class IconRoundFilter5Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter5Element.is, IconRoundFilter5Element);

export default IconRoundFilter5Element;
