import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterNoneElement
 * @class IconRoundFilterNoneElement
 * @extends {AoflElement}
 */
class IconRoundFilterNoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterNoneElement.is, IconRoundFilterNoneElement);

export default IconRoundFilterNoneElement;
