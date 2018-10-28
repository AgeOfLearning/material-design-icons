import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallSplitElement
 * @class IconRoundCallSplitElement
 * @extends {AoflElement}
 */
class IconRoundCallSplitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallSplitElement.is, IconRoundCallSplitElement);

export default IconRoundCallSplitElement;
