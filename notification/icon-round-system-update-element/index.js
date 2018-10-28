import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSystemUpdateElement
 * @class IconRoundSystemUpdateElement
 * @extends {AoflElement}
 */
class IconRoundSystemUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSystemUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-system-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSystemUpdateElement.is, IconRoundSystemUpdateElement);

export default IconRoundSystemUpdateElement;
