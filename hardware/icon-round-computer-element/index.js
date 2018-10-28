import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundComputerElement
 * @class IconRoundComputerElement
 * @extends {AoflElement}
 */
class IconRoundComputerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundComputerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-computer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundComputerElement.is, IconRoundComputerElement);

export default IconRoundComputerElement;
