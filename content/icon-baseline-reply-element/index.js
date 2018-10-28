import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplyElement
 * @class IconBaselineReplyElement
 * @extends {AoflElement}
 */
class IconBaselineReplyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-reply';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplyElement.is, IconBaselineReplyElement);

export default IconBaselineReplyElement;
