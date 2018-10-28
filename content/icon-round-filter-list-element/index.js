import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterListElement
 * @class IconRoundFilterListElement
 * @extends {AoflElement}
 */
class IconRoundFilterListElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterListElement.is, IconRoundFilterListElement);

export default IconRoundFilterListElement;
