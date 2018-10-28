import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplyAllElement
 * @class IconBaselineReplyAllElement
 * @extends {AoflElement}
 */
class IconBaselineReplyAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplyAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-reply-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplyAllElement.is, IconBaselineReplyAllElement);

export default IconBaselineReplyAllElement;
