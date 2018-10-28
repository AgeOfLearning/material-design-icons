import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMinimizeElement
 * @class IconRoundMinimizeElement
 * @extends {AoflElement}
 */
class IconRoundMinimizeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMinimizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-minimize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMinimizeElement.is, IconRoundMinimizeElement);

export default IconRoundMinimizeElement;
