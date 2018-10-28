import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterBAndWElement
 * @class IconRoundFilterBAndWElement
 * @extends {AoflElement}
 */
class IconRoundFilterBAndWElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterBAndWElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-b-and-w';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterBAndWElement.is, IconRoundFilterBAndWElement);

export default IconRoundFilterBAndWElement;
