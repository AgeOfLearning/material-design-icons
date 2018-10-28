import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSearchElement
 * @class IconRoundSearchElement
 * @extends {AoflElement}
 */
class IconRoundSearchElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSearchElement.is, IconRoundSearchElement);

export default IconRoundSearchElement;
