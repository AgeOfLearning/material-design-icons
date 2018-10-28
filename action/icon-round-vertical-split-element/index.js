import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVerticalSplitElement
 * @class IconRoundVerticalSplitElement
 * @extends {AoflElement}
 */
class IconRoundVerticalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVerticalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vertical-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVerticalSplitElement.is, IconRoundVerticalSplitElement);

export default IconRoundVerticalSplitElement;
