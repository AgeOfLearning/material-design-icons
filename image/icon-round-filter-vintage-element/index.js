import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterVintageElement
 * @class IconRoundFilterVintageElement
 * @extends {AoflElement}
 */
class IconRoundFilterVintageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterVintageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-vintage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterVintageElement.is, IconRoundFilterVintageElement);

export default IconRoundFilterVintageElement;
