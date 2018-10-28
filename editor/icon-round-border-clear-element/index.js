import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderClearElement
 * @class IconRoundBorderClearElement
 * @extends {AoflElement}
 */
class IconRoundBorderClearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderClearElement.is, IconRoundBorderClearElement);

export default IconRoundBorderClearElement;
