import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStrikethroughSElement
 * @class IconRoundStrikethroughSElement
 * @extends {AoflElement}
 */
class IconRoundStrikethroughSElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStrikethroughSElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-strikethrough-s';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStrikethroughSElement.is, IconRoundStrikethroughSElement);

export default IconRoundStrikethroughSElement;
