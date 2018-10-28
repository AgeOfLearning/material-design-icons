import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSortByAlphaElement
 * @class IconRoundSortByAlphaElement
 * @extends {AoflElement}
 */
class IconRoundSortByAlphaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSortByAlphaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sort-by-alpha';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSortByAlphaElement.is, IconRoundSortByAlphaElement);

export default IconRoundSortByAlphaElement;
