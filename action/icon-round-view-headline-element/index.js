import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewHeadlineElement
 * @class IconRoundViewHeadlineElement
 * @extends {AoflElement}
 */
class IconRoundViewHeadlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewHeadlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-headline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewHeadlineElement.is, IconRoundViewHeadlineElement);

export default IconRoundViewHeadlineElement;
