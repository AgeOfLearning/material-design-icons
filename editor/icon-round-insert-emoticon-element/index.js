import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertEmoticonElement
 * @class IconRoundInsertEmoticonElement
 * @extends {AoflElement}
 */
class IconRoundInsertEmoticonElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertEmoticonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-emoticon';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertEmoticonElement.is, IconRoundInsertEmoticonElement);

export default IconRoundInsertEmoticonElement;
