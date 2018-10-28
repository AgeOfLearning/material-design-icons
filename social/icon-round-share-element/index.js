import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShareElement
 * @class IconRoundShareElement
 * @extends {AoflElement}
 */
class IconRoundShareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShareElement.is, IconRoundShareElement);

export default IconRoundShareElement;
