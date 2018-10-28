import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallElement
 * @class IconRoundCallElement
 * @extends {AoflElement}
 */
class IconRoundCallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallElement.is, IconRoundCallElement);

export default IconRoundCallElement;
