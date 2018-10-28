import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundClearElement
 * @class IconRoundClearElement
 * @extends {AoflElement}
 */
class IconRoundClearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundClearElement.is, IconRoundClearElement);

export default IconRoundClearElement;
