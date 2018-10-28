import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMaximizeElement
 * @class IconRoundMaximizeElement
 * @extends {AoflElement}
 */
class IconRoundMaximizeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMaximizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-maximize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMaximizeElement.is, IconRoundMaximizeElement);

export default IconRoundMaximizeElement;
